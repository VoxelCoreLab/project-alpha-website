import { computed, ref, watch } from 'vue';

type CurrencyKey = 'eur' | 'usd' | 'chf';

type PricingConfig = {
    currency: 'EUR' | 'USD' | 'CHF';
    symbol: string;
    price: number;
};

const pricingByCurrency: Record<CurrencyKey, PricingConfig> = {
    eur: { currency: 'EUR', symbol: '€', price: 20 },
    usd: { currency: 'USD', symbol: '$', price: 25 },
    chf: { currency: 'CHF', symbol: 'CHF', price: 20 },
};

const discountRate = 0.25;

const pricingOptions = [
    { value: 'eur', label: 'Default (EUR)' },
    { value: 'usd', label: 'United States (USD)' },
    { value: 'chf', label: 'Switzerland (CHF)' },
] as const;

const storageKey = 'pricingPreviewCurrency';

const getInitialCurrency = (): CurrencyKey => {
    if (typeof window === 'undefined') {
        return 'eur';
    }

    const stored = window.localStorage.getItem(storageKey) as CurrencyKey | null;
    if (stored && stored in pricingByCurrency) {
        return stored;
    }

    return 'eur';
};

const formatAmount = (amount: number, pricing: PricingConfig) => {
    if (pricing.currency === 'CHF') {
        return `${amount.toFixed(2)} ${pricing.symbol}`;
    }

    return `${pricing.symbol}${amount.toFixed(2)}`;
};

export const usePricingPreview = () => {
    const selectedCurrency = ref<CurrencyKey>(getInitialCurrency());

    watch(selectedCurrency, (value) => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(storageKey, value);
        }
    });

    const selectedPricing = computed(() => pricingByCurrency[selectedCurrency.value]);

    const formattedOriginalPrice = computed(() =>
        formatAmount(selectedPricing.value.price, selectedPricing.value)
    );

    const formattedDiscountAmount = computed(() => {
        const discount = selectedPricing.value.price * discountRate;
        return formatAmount(discount, selectedPricing.value);
    });

    const formattedSubtotal = computed(() => {
        const subtotal = selectedPricing.value.price * (1 - discountRate);
        return formatAmount(subtotal, selectedPricing.value);
    });

    return {
        discountRate,
        pricingOptions,
        selectedCurrency,
        formattedOriginalPrice,
        formattedDiscountAmount,
        formattedSubtotal,
    };
};

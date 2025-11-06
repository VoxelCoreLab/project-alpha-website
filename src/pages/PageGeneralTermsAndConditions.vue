<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="m-auto grid h-full max-w-2xl p-4 md:p-8 text-left">
            <div class="flex flex-col gap-6">
                <h1 class="break-all text-2xl font-bold md:text-4xl">
                    Allgemeine Geschäftsbedingungen
                </h1>
                <p>für den Kauf des Computerspiels „Shadow Infection“ über die Website der Voxel Core Lab GmbH.</p>
                <div class="grid gap-4">
                    <div class="grid gap-1">
                        <h2 class="text-lg font-bold">1. Anbieter</h2>
                        <p>
                            Voxel Core Lab GmbH<br />
                            Bern, Schweiz<br />
                            E-Mail: voxelcorelab@gmail.com
                        </p>
                    </div>

                    <div>
                        <h2 class="text-lg font-bold">2. Geltungsbereich</h2>
                        <p>
                            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Käufe des digitalen Spiels
                            „Shadow Infection“ über unsere Website.
                            Mit dem Abschluss des Kaufvorgangs erklärst du dich mit diesen Bedingungen einverstanden.
                        </p>
                    </div>

                    <div class="grid gap-1">
                        <h2 class="text-lg font-bold">
                            3. Vertragsgegenstand
                        </h2>
                        <p>
                            Du erwirbst mit dem Kauf eine digitale Lizenz zur persönlichen Nutzung des Spiels „Shadow
                            Infection“.
                            Es handelt sich nicht um einen physischen Datenträger, sondern um einen Download.
                            Die Lizenz ist nicht übertragbar und darf nicht weiterverkauft, verliehen oder weitergegeben
                            werden.
                        </p>
                    </div>

                    <div class="grid gap-1">
                        <h2 class="text-lg font-bold">
                            4. Preise und Zahlung
                        </h2>
                        <p>
                            Alle Preise sind in Euro (EUR) angegeben und inklusive der gesetzlichen Mehrwertsteuer.
                            Die Zahlung erfolgt sicher über unseren Partner Stripe, der verschiedene Zahlungsmethoden
                            (z. B. Kreditkarte) anbietet.
                            Der Download des Spiels wird nach erfolgreicher Zahlung freigeschaltet.
                        </p>
                    </div>

                    <div class="grid gap-1">
                        <h2 class="text-lg font-bold">
                            5.Lieferung (Download)
                        </h2>
                        <p>
                            Nach erfolgreicher Bezahlung erhältst du Zugriff auf den Download-Link des Spiels.
                            Dieser Link ist persönlich und darf nicht weitergegeben werden.
                            Sichere die heruntergeladene Datei selbst, da wir keinen dauerhaften Cloudspeicher
                            bereitstellen.
                        </p>
                    </div>

                    <div class="grid gap-1">
                        <h2 class="text-lg font-bold">6. Kein Widerrufs- oder Rückgaberecht</h2>
                        <p>
                            Da es sich um digitale Inhalte handelt, die sofort nach dem Kauf verfügbar sind, besteht
                            kein Widerrufs- oder Rückgaberecht.
                            Mit dem Abschluss des Kaufs stimmst du ausdrücklich zu, dass die Ausführung des Vertrags vor
                            Ablauf der Widerrufsfrist beginnt und du dein Widerrufsrecht verlierst.
                        </p>
                    </div>

                    <div class="grid gap-1">
                        <h2 class="text-lg font-bold">7. Nutzungslizenz</h2>
                        <p>Mit dem Kauf erhältst du eine einfache, persönliche Lizenz zur Nutzung des Spiels auf deinen
                            eigenen Geräten.</p>
                        <p>Es ist nicht erlaubt:</p>
                        <ul class="list-inside list-disc">
                            <li>das Spiel zu kopieren, zu verbreiten oder öffentlich zugänglich zu machen,</li>
                            <li>
                                den Code, die Assets oder sonstige Bestandteile zu verändern oder weiterzuverwenden,
                            </li>
                            <li>
                                die Lizenz weiterzuverkaufen oder zu übertragen.
                            </li>
                        </ul>
                    </div>

                    <div class="grid gap-1">
                        <h2 class="text-lg font-bold">8. Technische Voraussetzungen</h2>
                        <p>
                            Um das Spiel herunterzuladen und zu spielen, benötigst du eine funktionierende
                            Internetverbindung sowie ein Gerät, das die technischen Mindestanforderungen erfüllt (diese
                            werden auf der Produktseite angegeben).
                        </p>
                        <p>Die Voxel Core Lab GmbH übernimmt keine Haftung, wenn das Spiel auf deinem Gerät aufgrund
                            fehlender Systemanforderungen nicht läuft.</p>
                    </div>

                    <div class="grid gap-1">
                        <h2 class="text-lg font-bold">9. Haftung</h2>
                        <p>
                            Wir haften nur für Schäden, die auf vorsätzliches oder grob fahrlässiges Verhalten
                            unsererseits zurückzuführen sind.
                            Für indirekte Schäden, Folgeschäden oder Datenverluste übernehmen wir keine Haftung, soweit
                            gesetzlich zulässig.
                        </p>
                    </div>

                    <div class="grid gap-1">
                        <h2 class="text-lg font-bold">
                            10. Datenschutz
                        </h2>
                        <p>
                            Der Schutz deiner Daten ist uns wichtig.
                            Informationen zur Erhebung, Verarbeitung und Nutzung deiner personenbezogenen Daten findest
                            du in unserer <RouterLink to="/privacy-policy" class="underline">Datenschutzerklärung</RouterLink>.
                        </p>
                    </div>

                    <div class="grid gap-1">
                        <h2 class="text-lg font-bold">11. Anwendbares Recht und Gerichtsstand</h2>
                        <p>
                            Es gilt ausschliesslich Schweizer Recht, unter Ausschluss des UN-Kaufrechts (CISG).
                            Gerichtsstand ist Bern, Schweiz, sofern keine zwingenden gesetzlichen Vorschriften
                            entgegenstehen.
                        </p>
                    </div>

                    <div class="grid gap-1">
                        <h2 class="text-lg font-bold">12. Änderungen dieser AGB</h2>
                        <p>
                            Wir behalten uns vor, diese AGB bei Bedarf zu ändern.
                            Die jeweils gültige Version ist auf unserer Website einsehbar.
                            Für abgeschlossene Käufe gilt die Version, die zum Zeitpunkt des Vertragsabschlusses
                            veröffentlicht war.
                        </p>
                    </div>

                    <p>Stand: November 2025</p>
                </div>
            </div>
        </div>
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'Allgemeine Geschäftsbedingungen',
        href: '/general-terms-and-conditions'
    }
]
</script>
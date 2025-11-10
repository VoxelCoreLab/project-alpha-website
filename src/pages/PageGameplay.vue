<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <!-- Hero Section -->
        <div class="relative bg-gradient-to-b from-base-100 via-base-200 to-base-300 py-16 md:py-24 overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
            <div class="max-w-6xl mx-auto px-4 relative z-10">
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold italic text-center mb-6 uppercase">
                    How It Works
                </h1>
                <p class="text-xl md:text-2xl text-center text-base-content/80 max-w-3xl mx-auto">
                    Shadow Infection is a cooperative top-down multiplayer game set in the fantasy world of Umbra. 
                    Master tactical combat, customize your abilities, and fight the spreading shadow corruption.
                </p>
            </div>
        </div>

        <!-- Game Overview -->
        <div class="bg-base-200 py-16 md:py-24">
            <div class="max-w-6xl mx-auto px-4">
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-base-100 p-8 rounded-lg border border-base-300 hover:border-primary transition-colors">
                        <div class="text-4xl mb-4">🎮</div>
                        <h3 class="text-2xl font-bold mb-3">Top-Down Action</h3>
                        <p class="text-base-content/80">
                            Isometric perspective with free camera rotation. Strategic positioning and tactical gameplay.
                        </p>
                    </div>
                    <div class="bg-base-100 p-8 rounded-lg border border-base-300 hover:border-primary transition-colors">
                        <div class="text-4xl mb-4">👥</div>
                        <h3 class="text-2xl font-bold mb-3">Multiplayer Co-op</h3>
                        <p class="text-base-content/80">
                            Team up with up to 4 players. Coordinate abilities and strategies to overcome challenges.
                        </p>
                    </div>
                    <div class="bg-base-100 p-8 rounded-lg border border-base-300 hover:border-primary transition-colors">
                        <div class="text-4xl mb-4">⚔️</div>
                        <h3 class="text-2xl font-bold mb-3">Tactical Combat</h3>
                        <p class="text-base-content/80">
                            Choose from diverse abilities and create powerful loadouts that match your playstyle.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Game Modes -->
        <div class="bg-base-300 py-16 md:py-24">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-4xl md:text-6xl font-cinzel font-bold italic text-center mb-12 uppercase">Game Modes</h2>
                
                <!-- Zombie Mode -->
                <div class="mb-16 bg-base-200 rounded-lg overflow-hidden border border-base-300">
                    <div class="grid md:grid-cols-2 gap-0">
                        <div class="p-8 md:p-12 flex flex-col justify-center">
                            <div class="inline-flex items-center gap-2 mb-4">
                                <span class="text-3xl">🧟</span>
                                <h3 class="text-3xl md:text-4xl font-bold">Zombie Survival</h3>
                            </div>
                            <p class="text-lg mb-6 text-base-content/80">
                                Face endless waves of shadow-infected zombies. Each wave increases in difficulty, testing your team's coordination and skill.
                            </p>
                            <ul class="space-y-3">
                                <li class="flex items-start gap-3">
                                    <span class="text-success text-xl">✓</span>
                                    <span>Earn gold by defeating enemies to upgrade abilities</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-success text-xl">✓</span>
                                    <span>Unlock new map areas by opening doors with gold</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-success text-xl">✓</span>
                                    <span>Purchase temporary power-ups to survive longer waves</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-success text-xl">✓</span>
                                    <span>Revive fallen teammates to keep your squad alive</span>
                                </li>
                            </ul>
                        </div>
                        <div class="bg-gradient-to-br from-error/20 to-error/5 p-8 md:p-12 flex items-center justify-center">
                            <div class="text-center">
                                <div class="text-6xl md:text-8xl mb-4">🌊</div>
                                <p class="text-2xl font-bold">Endless Waves</p>
                                <p class="text-base-content/60 mt-2">How long can you survive?</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Conquest Mode -->
                <div class="mb-16 bg-base-200 rounded-lg overflow-hidden border border-base-300">
                    <div class="grid md:grid-cols-2 gap-0">
                        <div class="bg-gradient-to-br from-primary/20 to-primary/5 p-8 md:p-12 flex items-center justify-center order-2 md:order-1">
                            <div class="text-center">
                                <div class="text-6xl md:text-8xl mb-4">🏰</div>
                                <p class="text-2xl font-bold">3 Control Points</p>
                                <p class="text-base-content/60 mt-2">A, B, and C zones</p>
                            </div>
                        </div>
                        <div class="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                            <div class="inline-flex items-center gap-2 mb-4">
                                <span class="text-3xl">⚔️</span>
                                <h3 class="text-3xl md:text-4xl font-bold">Conquest</h3>
                            </div>
                            <p class="text-lg mb-6 text-base-content/80">
                                Capture and hold all three control points simultaneously to win. Strategic positioning and team coordination are key.
                            </p>
                            <ul class="space-y-3">
                                <li class="flex items-start gap-3">
                                    <span class="text-success text-xl">✓</span>
                                    <span>Control zones A, B, and C to secure victory</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-success text-xl">✓</span>
                                    <span>Earn bonuses for holding points longer (reduced respawn time)</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-success text-xl">✓</span>
                                    <span>Activate teleport stations by controlling specific zones</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-success text-xl">✓</span>
                                    <span>Coordinate with your team to defend and attack simultaneously</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Team Deathmatch -->
                <div class="bg-base-200 rounded-lg overflow-hidden border border-base-300">
                    <div class="grid md:grid-cols-2 gap-0">
                        <div class="p-8 md:p-12 flex flex-col justify-center">
                            <div class="inline-flex items-center gap-2 mb-4">
                                <span class="text-3xl">💀</span>
                                <h3 class="text-3xl md:text-4xl font-bold">Team Deathmatch</h3>
                            </div>
                            <p class="text-lg mb-6 text-base-content/80">
                                Pure combat action. Eliminate the enemy team and reach the target number of kills to win.
                            </p>
                            <ul class="space-y-3">
                                <li class="flex items-start gap-3">
                                    <span class="text-success text-xl">✓</span>
                                    <span>Fast-paced team vs team combat</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-success text-xl">✓</span>
                                    <span>Quick respawns keep the action intense</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-success text-xl">✓</span>
                                    <span>Destroy orbs for random power-ups (+20% damage, shields, etc.)</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-success text-xl">✓</span>
                                    <span>Track kills, deaths, and performance stats</span>
                                </li>
                            </ul>
                        </div>
                        <div class="bg-gradient-to-br from-warning/20 to-warning/5 p-8 md:p-12 flex items-center justify-center">
                            <div class="text-center">
                                <div class="text-6xl md:text-8xl mb-4">⚡</div>
                                <p class="text-2xl font-bold">Power Orbs</p>
                                <p class="text-base-content/60 mt-2">Random buffs spawn on map</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Abilities & Loadouts -->
        <div class="bg-base-100 py-16 md:py-24">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-4xl md:text-6xl font-cinzel font-bold italic text-center mb-6 uppercase">Abilities & Loadouts</h2>
                <p class="text-center text-xl text-base-content/80 max-w-3xl mx-auto mb-12">
                    Build your perfect loadout with a combination of offensive, defensive, and support abilities.
                </p>

                <div class="bg-base-200 p-8 md:p-12 rounded-lg border border-base-300 mb-12">
                    <h3 class="text-2xl md:text-3xl font-bold mb-8 text-center">Loadout Structure</h3>
                    <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div class="bg-base-300 p-6 rounded-lg text-center border-2 border-primary/50">
                            <div class="text-4xl mb-2">⚔️</div>
                            <p class="font-bold text-lg">Ability 1</p>
                            <p class="text-sm text-base-content/60 mt-1">Q Key</p>
                        </div>
                        <div class="bg-base-300 p-6 rounded-lg text-center border-2 border-primary/50">
                            <div class="text-4xl mb-2">🛡️</div>
                            <p class="font-bold text-lg">Ability 2</p>
                            <p class="text-sm text-base-content/60 mt-1">E Key</p>
                        </div>
                        <div class="bg-base-300 p-6 rounded-lg text-center border-2 border-primary/50">
                            <div class="text-4xl mb-2">✨</div>
                            <p class="font-bold text-lg">Ability 3</p>
                            <p class="text-sm text-base-content/60 mt-1">R Key</p>
                        </div>
                        <div class="bg-base-300 p-6 rounded-lg text-center border-2 border-warning/70">
                            <div class="text-4xl mb-2">💥</div>
                            <p class="font-bold text-lg">Ultimate</p>
                            <p class="text-sm text-base-content/60 mt-1">Space Key</p>
                        </div>
                        <div class="bg-base-300 p-6 rounded-lg text-center border-2 border-success/50">
                            <div class="text-4xl mb-2">🔮</div>
                            <p class="font-bold text-lg">Passive</p>
                            <p class="text-sm text-base-content/60 mt-1">Always Active</p>
                        </div>
                    </div>
                </div>

                <!-- Ability Categories -->
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-base-200 p-8 rounded-lg border border-base-300">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">⚔️</span>
                            <h3 class="text-2xl font-bold">Offensive</h3>
                        </div>
                        <p class="text-base-content/80 mb-4">Deal massive damage to enemies with powerful attacks.</p>
                        <ul class="space-y-2 text-base-content/70">
                            <li>• Fire Arrow - Burning projectile</li>
                            <li>• Cone Strike - Area melee attack</li>
                            <li>• Shadow Lance - Piercing dark magic</li>
                            <li>• Meteor Shower (Ultimate) - Rain destruction</li>
                        </ul>
                    </div>

                    <div class="bg-base-200 p-8 rounded-lg border border-base-300">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">🛡️</span>
                            <h3 class="text-2xl font-bold">Defensive</h3>
                        </div>
                        <p class="text-base-content/80 mb-4">Protect yourself and allies from incoming damage.</p>
                        <ul class="space-y-2 text-base-content/70">
                            <li>• Magic Shield - Absorb damage</li>
                            <li>• Counterspell - Reflect enemy attacks</li>
                            <li>• Invulnerability - Brief immunity</li>
                            <li>• Time Stop (Ultimate) - Freeze everything</li>
                        </ul>
                    </div>

                    <div class="bg-base-200 p-8 rounded-lg border border-base-300">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">💚</span>
                            <h3 class="text-2xl font-bold">Support</h3>
                        </div>
                        <p class="text-base-content/80 mb-4">Heal and empower your team for sustained combat.</p>
                        <ul class="space-y-2 text-base-content/70">
                            <li>• Healing Circle - Restore health over time</li>
                            <li>• Speed Buff - Increase movement</li>
                            <li>• Debuff Removal - Cleanse negative effects</li>
                            <li>• Giant Wave (Ultimate) - Mass healing</li>
                        </ul>
                    </div>

                    <div class="bg-base-200 p-8 rounded-lg border border-base-300">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">🔮</span>
                            <h3 class="text-2xl font-bold">Passive Abilities</h3>
                        </div>
                        <p class="text-base-content/80 mb-4">Permanent enhancements to your combat style.</p>
                        <ul class="space-y-2 text-base-content/70">
                            <li>• Poison Weapons - Damage over time</li>
                            <li>• Regeneration Shield - Auto-heal</li>
                            <li>• Armor Penetration - Ignore defenses</li>
                            <li>• Life Steal - Heal on hit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Progression System -->
        <div class="bg-base-200 py-16 md:py-24">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-4xl md:text-6xl font-cinzel font-bold italic text-center mb-6 uppercase">Progression</h2>
                <p class="text-center text-xl text-base-content/80 max-w-3xl mx-auto mb-12">
                    Earn Essence through matches to unlock new abilities, cosmetics, and customization options.
                </p>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-base-300 p-8 rounded-lg border border-base-content/10 hover:border-primary transition-colors">
                        <div class="text-4xl mb-4">⭐</div>
                        <h3 class="text-2xl font-bold mb-3">Account Level</h3>
                        <p class="text-base-content/80">
                            Gain experience and level up your account. Higher levels unlock more Essence rewards and exclusive content.
                        </p>
                    </div>

                    <div class="bg-base-300 p-8 rounded-lg border border-base-content/10 hover:border-primary transition-colors">
                        <div class="text-4xl mb-4">🎯</div>
                        <h3 class="text-2xl font-bold mb-3">Unlock Abilities</h3>
                        <p class="text-base-content/80">
                            Spend Essence to unlock powerful new abilities for your loadout. Expand your strategic options.
                        </p>
                    </div>

                    <div class="bg-base-300 p-8 rounded-lg border border-base-content/10 hover:border-primary transition-colors">
                        <div class="text-4xl mb-4">🎨</div>
                        <h3 class="text-2xl font-bold mb-3">Cosmetics</h3>
                        <p class="text-base-content/80">
                            Customize your Guardian with unique skins, weapon effects, and visual flair. Stand out on the battlefield.
                        </p>
                    </div>
                </div>

                <div class="mt-12 bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12 rounded-lg border border-primary/30">
                    <div class="flex flex-col md:flex-row items-center gap-8">
                        <div class="text-6xl md:text-8xl">🏆</div>
                        <div class="flex-1 text-center md:text-left">
                            <h3 class="text-2xl md:text-3xl font-bold mb-3">Customization Tools</h3>
                            <p class="text-lg text-base-content/80">
                                Create your unique identity with the Logo Editor and unleash your creativity with the Map Editor. 
                                Design custom battlegrounds and share them with the community!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- The World of Umbra -->
        <div class="bg-base-300 py-16 md:py-24">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-4xl md:text-6xl font-cinzel font-bold italic text-center mb-6 uppercase">The World of Umbra</h2>
                <div class="max-w-3xl mx-auto">
                    <p class="text-xl text-center text-base-content/80 mb-8">
                        A realm corrupted by shadow magic, where brave Guardians stand as the last line of defense against the spreading darkness.
                    </p>
                    
                    <div class="bg-base-200 p-8 md:p-12 rounded-lg border border-base-content/10">
                        <div class="prose prose-invert max-w-none">
                            <p class="text-lg leading-relaxed text-base-content/90">
                                In the world of <span class="font-bold text-primary">Umbra</span>, an ancient shadow magic has awakened, 
                                corrupting everything it touches. Creatures twisted by dark forces roam the lands, 
                                and reality itself begins to fracture under the weight of this malevolent power.
                            </p>
                            <p class="text-lg leading-relaxed text-base-content/90 mt-4">
                                You are a <span class="font-bold text-secondary">Guardian</span> - wielders of both steel and magic, 
                                trained to combat the shadow infection. Armed with powerful abilities and unwavering determination, 
                                you must work with your fellow Guardians to restore balance to Umbra.
                            </p>
                            <p class="text-lg leading-relaxed text-base-content/90 mt-4">
                                Your ultimate goal: <span class="font-bold text-warning">discover the source of the shadow corruption</span> 
                                and end it before all of Umbra falls into eternal darkness.
                            </p>
                        </div>

                        <div class="mt-8 flex justify-center">
                            <a href="/world-map" class="btn btn-primary btn-outline btn-lg">
                                Explore the World Map
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-gradient-to-b from-base-200 to-base-300 py-16 md:py-24">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h2 class="text-4xl md:text-5xl font-cinzel font-bold italic mb-6 uppercase">Ready to Become a Guardian?</h2>
                <p class="text-xl text-base-content/80 mb-8">
                    Join the fight against the shadow infection and save the world of Umbra.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <RouterLink to="/product" class="btn btn-primary btn-lg">
                        Buy Now
                    </RouterLink>
                </div>
            </div>
        </div>
    </LayoutBasic>
</template>

<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'How It Works',
        href: '/gameplay'
    }
]
</script>

<style scoped>
.prose {
    color: inherit;
}
</style>
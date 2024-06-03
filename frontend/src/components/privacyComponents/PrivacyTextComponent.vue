<script setup lang="ts">
import { sectionOne, sectionTwo, sectionThree } from '@/static/textPrivacy';
</script>

<template>
    <main class="main-privacy">
        <div>
            <h1>{{ sectionOne.title }}</h1>
            <p>{{ sectionOne.p1 }}</p>
        </div>
        <div>
            <h1>{{ sectionTwo.title }}</h1>
            <p>{{ sectionTwo.p1 }}</p>
            <h5>{{ sectionTwo.sub1 }}</h5>
            <p>{{ sectionTwo.p11 }}</p>
            <ul>
                <li>{{ sectionTwo.li1 }}</li>
                <li>{{ sectionTwo.li2 }}</li>
                <li>{{ sectionTwo.li3 }}</li>
                <li>{{ sectionTwo.li4 }}</li>
            </ul>
            <h5>{{ sectionTwo.sub2 }}</h5>
            <p>{{ sectionTwo.p21 }}</p>
            <p>{{ sectionTwo.p22 }}</p>
            <p>{{ sectionTwo.p23 }}</p>
            <p>{{ sectionTwo.p24 }}</p>
            <h5>{{ sectionTwo.sub3 }}</h5>
            <p>{{ sectionTwo.p31 }}</p>
            <h5>{{ sectionTwo.sub4 }}</h5>
            <p>{{ sectionTwo.p41 }}</p>
            <ul>
                <li>{{ sectionTwo.l41 }}</li>
                <li>{{ sectionTwo.l42 }}</li>
                <li>{{ sectionTwo.l43 }}</li>
                <li>{{ sectionTwo.l44 }}</li>
                <li>{{ sectionTwo.l45 }}</li>
                <li>{{ sectionTwo.l46 }}</li>
                <li>{{ sectionTwo.l47 }}</li>
            </ul>
            <h5>{{ sectionTwo.sub5 }}</h5>
            <p>{{ sectionTwo.p51 }}</p>
            <h5>{{ sectionTwo.sub6 }}</h5>
            <p>{{ sectionTwo.p61 }}</p>
            <p>{{ sectionTwo.p62 }}</p>
            <p>{{ sectionTwo.p63 }}</p>
            <h5>{{ sectionTwo.sub7 }}</h5>
            <p>{{ sectionTwo.p71 }}</p>
            <p>{{ sectionTwo.p72 }}</p>
            <p>{{ sectionTwo.p73 }}</p>
            <h5>{{ sectionTwo.sub8 }}</h5>
            <p>{{ sectionTwo.p81 }}</p>
            <p>{{ sectionTwo.p82 }}</p>
            <h5>{{ sectionTwo.sub9 }}</h5>
            <p>{{ sectionTwo.p91 }}</p>
            <p>{{ sectionTwo.p92 }}</p>
            <h5>{{ sectionTwo.sub10 }}</h5>
            <p>{{ sectionTwo.p101 }}</p>
            <h5>{{ sectionTwo.sub11 }}</h5>
            <p>{{ sectionTwo.p111 }}</p>
            <p>{{ sectionTwo.p112 }}</p>
            <p>{{ sectionTwo.p113 }}</p>
            <p>{{ sectionTwo.p114 }}</p>
            <h5>{{ sectionTwo.sub12 }}</h5>
            <p>{{ sectionTwo.p121 }}</p>
            <ul>
                <li>{{ sectionTwo.l121 }}</li>
                <li>{{ sectionTwo.l122 }}</li>
                <li>{{ sectionTwo.l123 }}</li>
                <li>{{ sectionTwo.l124 }}</li>
                <li>{{ sectionTwo.l125 }}</li>
                <li>{{ sectionTwo.l126 }}</li>
                <li>{{ sectionTwo.l127 }}</li>
            </ul>
            <p>{{ sectionTwo.p122 }}</p>
            <ul>
                <li>{{ sectionTwo.l128 }}</li>
                <li>{{ sectionTwo.l129 }}</li>
                <li>{{ sectionTwo.l1210 }}</li>
                <li>{{ sectionTwo.l1211 }}</li>
                <li>{{ sectionTwo.l1212 }}</li>
            </ul>
            <p>{{ sectionTwo.p123 }}</p>
            <p>{{ sectionTwo.p124 }}</p>
            <p>{{ sectionTwo.p125 }}</p>
            <h5>{{ sectionTwo.sub13 }}</h5>
            <p>{{ sectionTwo.p131 }}</p>
            <h5>{{ sectionTwo.sub14 }}</h5>
            <p>{{ sectionTwo.p141 }}</p>
        </div>
        <div>
            <h1>{{ sectionThree.title }}</h1>
            <p>{{ sectionThree.p1 }}</p>
            <p>{{ sectionThree.p2 }}</p>
            <p>{{ sectionThree.p3 }}</p>
        </div>
    </main>
</template>

<style scoped>
h5 {
    margin-bottom: 0;
    font-weight: 600;
}
h1 {
    color: var(--color-primary);
}
.main-privacy {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>

<script lang="ts">
    import Toolbar from "./Toolbar.svelte";
    import ToolNavigation from "./ToolNavigation.svelte";
    import type { toolLink } from "$lib/interfaces/ToolLink";

    function toggle() {
        const toolbar = document.getElementById('toolbar');
        toolbar.classList.toggle('-translate-x-full');
    }

    const toolLinks: toolLink[][] = [[{
            alt: 'Шаблоны',
            src: "/assets/images/icon/toolbarIcon/templateIcon.svg",
            after: 'Шаблоны',
            onclick: toggle
        }, {
            alt: 'Добавить',
            src: "/assets/images/icon/toolbarIcon/addIcon.svg",
            after: 'Добавить'
        }, {
            alt: 'Медия',
            src: "/assets/images/icon/toolbarIcon/mediaIcon.svg",
            after: 'Медия'
        }, {
            alt: 'Дизайн',
            src: "/assets/images/icon/toolbarIcon/designIcon.svg",
            after: 'Дизайн'
        }, {
            alt: 'Адаптив',
            src: "/assets/images/icon/toolbarIcon/adaptiveIcon.svg",
            after: 'Адаптив'
        }], [{
            alt: 'Просмотр',
            src: "/assets/images/icon/toolbarIcon/viewIcon.svg",
            after: 'Просмотр'
        }, {
            alt: 'Сохранить',
            src: "/assets/images/icon/toolbarIcon/saveIcon.svg",
            after: 'Сохранить'
        }]];

    export let content;
</script>

<aside class="relative">
    <ToolNavigation {toolLinks}/>
    <Toolbar {content}/>
</aside>
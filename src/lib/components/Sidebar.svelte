<script lang="ts">
    import Toolbar from "./Toolbar.svelte";
    import ToolNavigation from "./ToolNavigation.svelte";
    import type { toolLink } from "$lib/interfaces/ToolLink";
    import Editbar from "$lib/components/Editbar.svelte";
    import { content } from "$lib/stores";

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
            after: 'Добавить',
            onclick: toggle
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

    let bar = {
        component: Editbar,
        props: {
            text: $content[0].props.text
        }
    }
</script>

<aside class="relative">
    <ToolNavigation {toolLinks}/>
    <section id="toolbar"
             class="grid h-screen border-l-2 p-6 pl-8 gap-6 duration-200 overflow-y-scroll no-scrollbar
         backdrop-blur-md bg-main-color/90 absolute left-full top-0 transform content-start">
<!--        <svelte:component this={bar.component} props={bar.props}></svelte:component>-->
<!--        <Toolbar/>-->
        <Editbar props={bar.props.text}/>
    </section>
</aside>
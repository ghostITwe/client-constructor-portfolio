<script lang="ts">
    import Toolbar from "./Toolbar.svelte";
    import ToolNavigation from "./ToolNavigation.svelte";
    import templateIcon from "../assets/images/icon/toolbarIcon/templateIcon.svg";
    import addIcon from "../assets/images/icon/toolbarIcon/addIcon.svg";
    import mediaIcon from "../assets/images/icon/toolbarIcon/mediaIcon.svg";
    import designIcon from "../assets/images/icon/toolbarIcon/designIcon.svg";
    import adaptiveIcon from "../assets/images/icon/toolbarIcon/adaptiveIcon.svg";
    import viewIcon from "../assets/images/icon/toolbarIcon/viewIcon.svg";
    import saveIcon from "../assets/images/icon/toolbarIcon/saveIcon.svg";
    import type { toolLink } from "../lib/interfaces/ToolLink";

    function toggle() {
        const toolbar = document.getElementById('toolbar');
        toolbar.classList.toggle('-translate-x-full');
    }

    const toolLinks: toolLink[][] = [[{
            alt: 'Шаблоны',
            src: templateIcon,
            after: 'Шаблоны',
            onclick: toggle
        }, {
            alt: 'Добавить',
            src: addIcon,
            after: 'Добавить'
        }, {
            alt: 'Медия',
            src: mediaIcon,
            after: 'Медия'
        }, {
            alt: 'Дизайн',
            src: designIcon,
            after: 'Дизайн'
        }, {
            alt: 'Адаптив',
            src: adaptiveIcon,
            after: 'Адаптив'
        }], [{
            alt: 'Просмотр',
            src: viewIcon,
            after: 'Просмотр'
        }, {
            alt: 'Сохранить',
            src: saveIcon,
            after: 'Сохранить'
        }]];
</script>

<aside class="relative">
    <ToolNavigation {toolLinks}/>
    <Toolbar/>
</aside>
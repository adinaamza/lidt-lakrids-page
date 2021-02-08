<template>
    <div id="app">
        <div class="nav">
            <div class="container" v-if="$route.name === 'Kontrakter'">
                <div class="list">
                    <div class="item">
                        <tachometer />
                        <div class="label">Dashbord</div>
                    </div>
                    <div class="item">
                        <coins />
                        <div class="label">Budgetter</div>
                    </div>
                    <div class="item active">
                        <file />
                        <div class="label">Kontrakter</div>
                    </div>
                    <div class="item">
                        <calendar />
                        <div class="label">Tidsplan</div>
                    </div>
                    <div class="item">
                        <bell />
                        <div class="label">Sprøgsmål</div>
                    </div>
                </div>
                <div class="actions">
                    <div class="initials icon">LP</div>
                    <cog class="icon" />
                    <signout class="icon" />
                </div>
            </div>
        </div>
        <div class="main-view">
            <router-view />
        </div>
    </div>
</template>

<script>
import tachometer from "@/assets/tachometer-alt-fastest-regular.svg";
import coins from "@/assets/coins-regular.svg";
import bell from "@/assets/concierge-bell-regular.svg";
import file from "@/assets/file-contract-regular.svg";
import calendar from "@/assets/calendar-day-regular.svg";
import signout from "@/assets/sign-out-alt-regular.svg";
import cog from "@/assets/cog-regular.svg";
export default {
    components: {
        tachometer,
        coins,
        bell,
        file,
        calendar,
        signout,
        cog,
    },
};
</script>

<style lang="less">
@grey: #4a4a4a;

#app {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    min-height: 100vh;
    align-items: stretch;
    position: relative;

    .nav {
        display: flex;
        flex-direction: column;
        background-color: #f7f7f7;
        border-radius: 20px;
        padding: 0 15px;
        position: fixed;
        box-sizing: border-box;
        min-height: calc(100vh - 40px);
        width: 240px;
        .container {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            margin: 60px 0 35px;
            .list {
                flex: 1 0 auto;
                .item {
                    position: relative;
                    margin: 5px 0;
                    padding: 17px 25px;
                    .label {
                        display: inline-block;
                        position: relative;
                        left: 40px;
                        font-size: 18px;
                        color: @grey;
;
                    }
                    svg {
                        position: absolute;
                        top: 16px;
                    }
                    &.active {
                        background-color: #ffffff;
                        border-radius: 12px;
                        color: #30b34a;
                        .label {
                            font-weight: 600;
                        }
                        svg {
                            color: #30b34a;
                        }
                    }
                }
            }
            .actions {
                flex: 0 0 auto;
                position: relative;
                margin: 0 26px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                * {
                    display: inline-block;
                    margin: 0 auto;
                    flex: 1 0 auto;
                    &:first-child,
                    &:last-child {
                        flex: 0 0 auto;
                    }
                }
                .initials {
                    width: 1.9em;
                    height: 1.9em;
                    line-height: 2em;
                    font-size: 13px;
                    font-weight: bold;
                    text-align: center;
                    color: #ffffff;
                    background-color: #be2069;
                    border-radius: 50%;
                }
                svg {
                    position: relative;
                    top: 1px;
                }
            }

            svg {
                height: 22px;
                display: inline-block;
                color: @grey;
            }
        }
    }
    .main-view {
        margin: 60px 64px;
        position: relative;
        max-width: calc(100vw - 430px);
        min-height: calc(100vh - 160px);
        left: 230px;
    }
}
</style>

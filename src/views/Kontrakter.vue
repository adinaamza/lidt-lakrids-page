<template>
    <div class="contracts">
        <h1>Kontrakter</h1>
        <div class="cards">
            <div class="drafts column">
                <card
                    v-for="(contract, i) in draftContracts"
                    v-bind:key="i"
                    v-bind:status="contract.status"
                    v-bind:title="contract.title"
                    v-bind:description="contract.description"
                    v-bind:name="contract.name"
                    v-bind:email="contract.email"
                    v-bind:price="contract.price"
                    v-bind:phone="contract.phone"
                />
            </div>
            <div class="sent column">
                <card
                    v-for="(contract, i) in sentContracts"
                    v-bind:key="i"
                    v-bind:status="contract.status"
                    v-bind:title="contract.title"
                    v-bind:description="contract.description"
                    v-bind:name="contract.name"
                    v-bind:email="contract.email"
                    v-bind:price="contract.price"
                    v-bind:phone="contract.phone"
                />
            </div>
            <div class="accepted column">
                <card
                    v-for="(contract, i) in acceptedContracts"
                    v-bind:key="i"
                    v-bind:status="contract.status"
                    v-bind:title="contract.title"
                    v-bind:description="contract.description"
                    v-bind:name="contract.name"
                    v-bind:email="contract.email"
                    v-bind:price="contract.price"
                    v-bind:phone="contract.phone"
                />
            </div>
            <div class="revision column">
                <card
                    v-for="(contract, i) in revisionContracts"
                    v-bind:key="i"
                    v-bind:status="contract.status"
                    v-bind:title="contract.title"
                    v-bind:description="contract.description"
                    v-bind:name="contract.name"
                    v-bind:email="contract.email"
                    v-bind:price="contract.price"
                    v-bind:phone="contract.phone"
                />
            </div>
        </div>
        <div class="add button">
            <plus />
        </div>
    </div>
</template>

<script>
import card from "@/components/Card.component.vue";
import contracts from "@/models/contract.model.js";
import plus from "@/assets/plus-regular.svg";

export default {
    name: "Kontrakter",
    components: {
        card,
        plus,
    },
    data: function () {
        return {
            draftContracts: contracts,
            sentContracts: contracts,
            acceptedContracts: contracts,
            revisionContracts: contracts,
        };
    },
    methods: {
        sortContracts(type) {
            var sortedContracts = contracts.filter((obj) => {
                return obj.status === type;
            });
            return sortedContracts;
        },
    },
    beforeMount() {
        this.draftContracts = this.sortContracts(type[0]);
        this.sentContracts = this.sortContracts(type[1]);
        this.acceptedContracts = this.sortContracts(type[2]);
        this.revisionContracts = this.sortContracts(type[3]);
    },
};

const type = ["Kladde", "Sendt", "Accepteret", "Anmodede om revision"];
</script>

<style lang="less">
.contracts {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: relative;
    h1 {
        flex: 0 0 auto;
        margin-bottom: 87px;
        background: rgb(255, 255, 255);
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 80%,
            rgba(255, 255, 255, 1) 100%
        );
    }
    .cards {
        flex: 1 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
        .column {
            flex: 1 0 0;
        }
        .column {
            margin: 0 15px;
            &:first-child {
                margin-left: 0;
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }

    .add.button {
        padding: 15px 25px;
        background-color: #30b34a;
        box-shadow: 0 10px 20px 0 rgba(48, 179, 74, 0.3);
        border-radius: 30px;
        line-height: 0;
        position: fixed;
        right: 63px;
        bottom: 65px;
        svg {
            height: 29px;
            color: #ffffff;
        }
    }
}
</style>

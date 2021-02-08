<template>
    <div class="card">
        <div
            class="status"
            v-bind:class="{
                draft: status === type[0],
                sent: status === type[1],
                accepted: status === type[2],
                revision: status === type[3],
            }"
        >
            {{ status }}
        </div>
        <div class="title">
            <clip />
            {{ title }}
        </div>
        <div class="description">{{ description }}</div>
        <div class="wrapper">
            <div class="name">{{ name }}</div>
            <div class="email">{{ email }}</div>
        </div>
        <div class="price">
            <div class="promotion">Fast Pris</div>
            {{ price.toLocaleString() }} DKK
        </div>
        <div class="phone">{{ phone }}</div>
        <div v-if="status === type[0]" class="button">
            Send kontrakt
        </div>
    </div>
</template>

<script>
import clip from "@/assets/paperclip-regular.svg";

export default {
    name: "Card",
    components: {
        clip,
    },
    props: {
        status: type,
        title: String,
        description: String,
        name: String,
        email: String,
        price: Number,
        phone: String,
    },
    data: function () {
        return {
            type: type,
        };
    },
};

const type = ["Kladde", "Sendt", "Accepteret", "Anmodede om revision"];
</script>


<style lang="less">
@grey: #4a4a4a;

.card {
    position: relative;
    background-color: #f7f7f7;
    border-radius: 15px 0 15px 15px;
    padding: 20px 25px 22px 20px;
    margin-bottom: 42px;
    color: @grey;
    .title {
        font-size: 18px;
        font-weight: 600;
        svg {
            height: 13px;
            display: inline-block;
            color: @grey;
            margin-right: 5px;
        }
        margin-bottom: 13px;
    }

    .description {
        margin-bottom: 15px;
    }

    .status {
        position: absolute;
        border-radius: 13px;
        min-width: 115px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        padding: 6px 14px;
        text-transform: uppercase;
        top: -12px;
        right: 0;

        &.draft {
            background-color: #d9d9d9;
            color: @grey;
        }
        &.sent {
            background-color: #f7efb1;
            color: #d6a500;
        }
        &.accepted {
            background-color: #d7f5dd;
            color: #30b34a;
        }
        &.revision {
            background-color: #fce8e8;
            color: #fd8282;
        }
    }
    .wrapper {
        display: inline-block;
        .name {
            font-weight: 600;
        }
    }
    .price {
        float: right;
        text-align: right;
        font-size: 18px;
        .promotion {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            color: #30B34A;
        }
    }
    .button {
        width: 201px;
        text-align: center;
        border-radius: 30px;
        background-color: #30B34A;
        box-shadow: 0 10px 20px 0 rgba(48, 179, 74, .3);
        padding: 10px 0;
        font-weight: 600;
        color: #ffffff;
            margin: 15px 0 7px auto;
            
    }
}
</style>

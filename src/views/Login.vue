<template>
    <div class="login">
        <h1>Log ind</h1>
        <form class="form">
            <div class="field">
                <input type="text" v-model="email" placeholder="E-mail" />
            </div>

            <div class="field">
                <input
                    type="password"
                    v-model="password"
                    placeholder="Adgangskode"
                />
            </div>

            <button
                :disabled="!email || !password"
                type="submit"
                class="submit button"
                @click.stop.prevent="validated()"
            >
                Log ind
            </button>
        </form>
    </div>
</template>

<script>
import router from '@/router/index'

export default {
    name: "Login",
    data: function () {
        return {
            email: null,
            password: null
        };
    },
    methods: {
      validated: function() {
        router.push('/kontrakter');
      }
    }
};
</script>


<style lang="less">
.login {
    position: absolute;
    left: 261px;
    top: 171px;
}

.form {
    padding: 53px 0 0;
    .field {
        padding: 10px 0;
        input {
            border: 1px solid #f7f7f7;
            border-radius: 15px;
            padding: 20px 15px 20px 25px;
            font-size: 16px;
            color: #4a4a4a;
            width: 358px;
            height: 21px;
            box-shadow: 0 10px 20px 0 rgba(214, 214, 214, 0.35);
            &::placeholder {
                color: #c9c9c9;
            }

            &:active,
            &:focus {
                border-color: rgba(48, 179, 74, 0.3);
            }
        }

        input[type="password"] {
            font: caption;
            letter-spacing: 4px;
            font-weight: 900;
            &::placeholder {
                color: #c9c9c9;
                font-family: "Rajdhani", Arial, sans-serif;
                font-size: 16px;
                letter-spacing: initial;
                font-weight: initial;
            }
        }
    }

    .submit.button {
        display: block;
        margin-top: 60px;
        padding: 18px;
        width: 280px;
        background-color: #30b34a;
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
        text-align: center;
        border: none;
        border-radius: 30px;
        box-shadow: 0 5px 20px 0 rgba(48, 179, 74, 0.3);
        &:disabled {
            background-color: rgba(48, 179, 74, 0.2);
        }
    }

    input,
    button {
        &:active,
        &:focus {
            outline: none;
        }
    }
}
</style>
<template>
    <div class="container">
        <div class="title">User List: <span class="count">{{ userCount }}</span></div>
        <div class="userContainer">
            <div class="userSlot">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus omnis placeat! Aliquam omnis quasi rem eligendi, corporis, voluptate vel, quae deserunt iste illo numquam sunt voluptates modi odio consequuntur.</div>       
        </div>
    </div>
</template>


<script>

import io from 'socket.io-client';

export default {
    name: 'Body',

    data() {
        return {
            socket: io('localhost:3000'),

            userCount: io.engine.clientsCount,
        }
    },


}
</script>

<style scoped>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 50px;
    }

    .userContainer {
        max-width: 70%;
        background-color: lightgray;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        font-weight: bold;
        font-size: 30px;
    }

    .count {
        color: red;
        font-size: 40px;
    }

    .userSlot {
        padding: 20px;
        width: 25%;
    }
</style>


<template>
    <div>
        <BtnPrimary />
        <div>13</div>
        <div>
            <B23 />
            <btn-27>有children</btn-27>
            <btn-28 text="no children"></btn-28>
        </div>
    </div>
</template>
<script>
import { btn27, Btn23 as b23, btn28 } from '@dingjia/vux';
import * as Com from '@dingjia/vux';
import bridgeA, { bridgeFn1, bridgeFn2 as bridgefn2Alias } from '@dingjia/bridge';
import * as Tools from '@dingjia/tool';
import business from '@dingjia/business';
import { newpushWindow, setSessionStorage } from '@dingjia/tool';
import { rpc } from '@dingjia/request';

export default {
    methods: {
        handleA() {
            newpushWindow('/a/b/c.html');
        },
        handleB() {
            bridgefn2Alias();
            bridgeA('1');
        },
        handleC() {
            const bridgeA = {};
            console.log(bridgeA.x);
        },
        handleD() {
            Tools.finish('');
        }
    }
};
</script>

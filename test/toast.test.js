const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    });

    describe('props', function () {
        this.timeout(15000);

        it('接受 autoClose 参数', function (done) {
            let div = document.createElement('div');
            document.body.appendChild(div);
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    autoClose: true,
                    autoCloseDelay: 1
                }
            }).$mount(div);
            vm.$on('close', () => {
                console.log('close');
            });
            setTimeout(() => {
                console.log(document.body.contains(vm.$el));
                expect(document.body.contains(vm.$el)).to.eq(false);
                done()
            }, 6000)

        });

    })
});

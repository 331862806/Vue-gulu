const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })

    it('子组件只能是 tabs-head 和 tabs-body', function () {

    });

    // it('可以设置icon.', () => {
    //     const Constructor = Vue.extend(Tabs)
    //     const vm = new Constructor({
    //         propsData: {
    //             icon: 'settings'
    //         }
    //     }).$mount()
    //     const useElement = vm.$el.querySelector('use')
    //     expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    //     vm.$destroy()
    // })
})

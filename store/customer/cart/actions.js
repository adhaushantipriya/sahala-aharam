const actions = {
	async createErpOrder ({ commit }, token) {
        console.log('createErpOrder token:: ', token);
        
        const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
		const res = await this.$axios.post(`${appURL}/api/create_order`, { token });
        console.log('createErpOrder res:: ', res);
        
		if (res.data && res.data.success)  {
			if (res.data.response && res.data.response.message) {
				await commit('UPDATE_ERP_ORDER_RESPONSE', res.data.response.message)
			}
		} else {
			await commit('UPDATE_ERP_ORDER_RESPONSE', res.data.response.message)
		}

	},
	async _createRazorpayOrder (_context, data) {
        const url = await this.$getApiEndpoint('createRazorpayOrder')
        const bodyFormData = new FormData()
        bodyFormData.append('email', data.email)
        bodyFormData.append('quoteId', data.quoteId)
        bodyFormData.append('payment_method', data.paymentMethod)
        if (data.billingAddressObject) {
            bodyFormData.append('billing_address', data.billingAddressObject)
        }
        if (data.order_check) {
            bodyFormData.append('order_check', data.orderCheck)
        }
        const headers = {
            Authorization: 'Bearer ' + this.getters['customer/login/getCustomerToken'],
            'Content-Type': 'multipart/form-data'
        }
        const axiosOptions = {
            method: 'POST',
            url,
            headers,
            data: bodyFormData
        }
        try {
            return await this.$makeHttpRequest(axiosOptions)
        } catch (error) {
            /* eslint-disable no-console */
            console.error('error while setting shipping information: ', error)
            return false
        }
    },
    async _createOrder (_context, data) {
        const url = await this.$getApiEndpoint('createOrder')
        const headers = {
            Authorization: 'Bearer ' + this.getters['customer/login/getCustomerToken']
        }
        const axiosOptions = {
            method: 'POST',
            url,
            headers,
            data
        }
        try {
            return await this.$makeHttpRequest(axiosOptions)
        } catch (error) {
            /* eslint-disable no-console */
            console.error('error while setting shipping information: ', error)
            return false
        }
    }
}
export default actions
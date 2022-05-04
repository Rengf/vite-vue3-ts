import request from '@/utils/request'

export const login = () =>
    request<{}>({
        url: '/login/info',
        method: 'GET'
    })
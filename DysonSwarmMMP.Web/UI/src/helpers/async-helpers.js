import LoadingComponent from '../components';

export default class AsyncHelper {
    createAsyncComponent(componentPath) {
        return () => ({
            component: import(componentPath),
            loading: LoadingComponent,
            delay: 200,
            timeout: 3000
        });
    }
}
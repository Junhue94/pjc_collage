import { CREATE_ASSET_TMP } from './upload-asset-tmp-mock-result';

const UploadAssetTmpMockHook = {
    before: {
        create(hook) {
            hook.result = CREATE_ASSET_TMP;
        },
    },
};

export default UploadAssetTmpMockHook;

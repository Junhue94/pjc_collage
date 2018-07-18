import { successNotification, errorNotification } from '../../../utils/Notification/notificationType';
import HomeService from '../../../api/home-service';

const homeService = new HomeService();

export const createPersonalDetails = personalDetails => async dispatch => homeService
    .createPersonalDetails(personalDetails)
    .then(() => {
        dispatch(successNotification('Personal Details', 'Details saved successfully!'));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to save personal details', error));
    });


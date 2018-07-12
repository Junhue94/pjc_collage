import { SET_PERSONAL_DETAILS_LIST } from '../actionTypes';
import { successNotification, errorNotification } from '../../../utils/Notification/notificationType';
import HomeService from '../../../api/home-service';

const homeService = new HomeService();

const setPersonalDetailsList = personalDetailsList => ({
    type: SET_PERSONAL_DETAILS_LIST,
    personalDetailsList,
});

export const createPersonalDetails = personalDetails => dispatch => homeService
    .createPersonalDetails(personalDetails)
    .then(() => {
        dispatch(successNotification('Personal Details', 'Details saved successfully!'));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to save personal details', error));
    });

export const findPersonalDetails = () => dispatch => homeService
    .findPersonalDetails({})
    .then((res) => {
        dispatch(setPersonalDetailsList(res));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to retrieve personal details list', error));
    });


import { FETCH_RENTALS, FETCH_RENTAL_BY_ID_SUCCESS, FETCH_RENTAL_BY_ID_INIT, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';
import axios from 'axios';
import authService from '../services/auth-service';
import axiosService from'../services/axios-service';

//Rental Action ---------------------------------------------------------------------------
 const axiosInstance = axiosService.getInstance();
const rentals = [
    {
        id: "1",
        title: "Nice view on ocean",
        city: "Jaffna",
        street: "Thirunelvely",
        catergory: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 4,
        description: "very nice apartment",
        dailyRate: 43
    },
    {
        id: "2",
        title: "Nice house",
        city: "Vavuniya",
        street: "School street",
        catergory: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 5,
        description: "very nice apartment",
        dailyRate: 43
    },
    {
        id: "3",
        title: "Nice Place",
        city: "Jaffna",
        street: "School street",
        catergory: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 5,
        description: "very nice apartment",
        dailyRate: 43
    },
    {
        id: "3",
        title: "Nice Place",
        city: "Jaffna",
        street: "School street",
        catergory: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 5,
        description: "very nice apartment",
        dailyRate: 43
    }
];

const fetchRentalByIdInit = () => {
    return {
        type: FETCH_RENTAL_BY_ID_INIT
    }
}

const fetchRentalByIdSuccess = (rental) => {
    return {
        type: FETCH_RENTAL_BY_ID_SUCCESS,
        rental
    }
}

export const fetchRentals = () => {
    return {
        type: FETCH_RENTALS,
        rentals
    }
}

export const fetchRentalById = (rentalId) => {
    const rental = rentals.find((rental) => rental.id === rentalId);

    return function (dispatch) {
        dispatch(fetchRentalByIdInit());

        //Simulate server call
        setTimeout(() => {
            const rental = rentals.find((rental) => rental.id === rentalId);
            dispatch(fetchRentalByIdSuccess(rental));
        }, 1000)
    }

}

//Auth Action--------------------------------------------------------
export const register = (userData) => {
    return axios.post('http://localhost:3001/api/v1/users/register', { ...userData }).then(
        res => res.data,
        err => Promise.reject(err.response.data.errors)
    )
}

const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
        //token
    }
}

const loginFailure = (errors) => {
    return {
        type: LOGIN_FAILURE,
        errors
    }
}
export const checkAuthState = () => {
    return dispatch => {
        if (authService.isAuthenticated()) {
            dispatch(loginSuccess());
        }
    }
}

export const login = (userData) => {
    return dispatch => {
        return axios.post('http://localhost:3001/api/v1/users/auth', { ...userData })
            .then(res => res.data)
            .then(token => {
                authService.saveToken(token);
                dispatch(loginSuccess());
            })
            .catch(({ response }) => {
                dispatch(loginFailure(response.data.errors));
            })
    }
}

export const logout = () => {
    authService.invalidateUser();
    return {
        type: LOGOUT
    }
}

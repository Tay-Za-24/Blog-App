import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stackNavigator';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import { useEffect } from 'react';

export default function Navigation({authState}) {

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(addUser(authState.user))
    //    console.log(authState.user);
    }, [])
    

    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
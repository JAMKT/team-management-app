import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
    switch(action.type){
        case 'INPUT_CHANGED':
            let formValid = true;
            
            for(const input in state.inputs){
                if(!state.inputs[input]){
                    continue;
                }

                if(input === action.inputId) {
                    formValid = formValid && action.isValid;
                } else {
                    formValid = formValid && state.inputs[input].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                   ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formValid
            };
            default:
                return state;
        }
};


export const useForm = (initalInputs, initalFormVal) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initalInputs,
        isValid: initalFormVal
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGED', 
            value: value, 
            isValid: isValid, 
            inputId: id
        });
    }, [dispatch]);

    return [formState, inputHandler];
};
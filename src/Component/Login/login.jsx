import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/FormControls/FormsControls';
import { loginThunk } from '../../Redux/auth-reducer';
import { required } from '../../ utils/validators/validators';
import { maxLengthCreator } from '../../ utils/validators/validators';
import { Redirect } from 'react-router-dom';
import s from '../../common/FormControls//FormControl.module.css';



const maxLength100 = maxLengthCreator(100);

const LoginForm = (props) => {
    return ( <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={'email'} 
                component={Input}   validate={[required,maxLength100]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} type={'password'}
                 component={Input}   validate={[required,maxLength100]} />
            </div>
            <div>
                <Field type={"checkbox"} name={'checkbox'}
                 component={Input}   validate={[required,maxLength100]} /> remember me
            </div>{props.error &&
            <div className={s.formSummaryError}>{props.error}
            </div>}
            <div>
                <button >Login</button>
            </div>
        </form>)
   
}


    
   

const LoginReduxForm = reduxForm({
    form:'login', 
} )(LoginForm )




const Login = (props) => {
    const onSubmit = (formData) =>{
        props.loginThunk (formData.email,formData.password,formData.rememberMe )

    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
         <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}

let  mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth
  });




export default  connect (mapStateToProps, {loginThunk})(Login); 

// export  default compose (connect(mapStateToProps,{loginThunk}),withRouter,
//     withRedirect) (Login);

  
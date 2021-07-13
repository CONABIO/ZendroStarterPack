import React, { ReactElement, useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import UsernameField from './login-field';
import PasswordField from './password-field';

import {
  AccountCircleOutlined as AccountCircleIcon,
  LockOutlined as LockIcon,
} from '@material-ui/icons';

import { useTranslation } from 'react-i18next';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  onCancel?: () => void;
}

interface LoginFormState {
  username: string;
  password: string;
}

export default function LoginForm(props: LoginFormProps): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();

  const [state, setState] = useState<LoginFormState>({
    username: '',
    password: '',
  });

  const onFieldChange = (prop: keyof LoginFormState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.onSubmit(state.username, state.password);
  };

  const handleCancel = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (props.onCancel) props.onCancel();
  };

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <UsernameField
        autoComplete="username"
        icon={AccountCircleIcon}
        label="username"
        onChange={onFieldChange('username')}
        type="username"
        value={state?.username}
        data-cy="login-form-username"
      />

      <PasswordField
        icon={LockIcon}
        label={t('login-form.password')}
        onChange={onFieldChange('password')}
        value={state?.password}
        data-cy="login-form-password"
      />

      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          size="medium"
          variant="contained"
          color="primary"
          type="submit"
          data-cy="login-form-login"
        >
          {t('login-form.login')}
        </Button>
        {props.onCancel && (
          <Button
            className={classes.button}
            size="medium"
            variant="outlined"
            color="secondary"
            onClick={handleCancel}
          >
            {t('login-form.cancel')}
          </Button>
        )}
      </div>
    </form>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: theme.spacing(6),
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
      },
    },
    button: {
      ...theme.typography.body1,
      padding: theme.spacing(2, 0),
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        '&:nth-child(1)': {
          marginBottom: theme.spacing(2),
        },
      },
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(32),
      },
    },
  })
);

import {
  LoginButton,
  LoginButtonBox,
  LoginContainer,
  LoginInput,
  LoginInputBox,
  LoginLayout,
} from './styles';
import useLogin from './useLogin';

export default function Login() {
  const loginHooks = useLogin();

  return (
    <LoginContainer>
      <LoginLayout>
        <h2>로그인</h2>

        <form onSubmit={loginHooks.onLogin}>
          <LoginInputBox>
            <label htmlFor="password">
              비밀번호 <span>*</span>
            </label>

            <LoginInput
              type="password"
              name="password"
              ref={loginHooks.passwordRef}
              placeholder="비밀번호"
              required
            />
          </LoginInputBox>

          <LoginButtonBox>
            <LoginButton type="submit">로그인</LoginButton>
          </LoginButtonBox>
        </form>
      </LoginLayout>
    </LoginContainer>
  );
}

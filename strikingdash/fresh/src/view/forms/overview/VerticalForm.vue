<template>
  <BasicFormWrapper>
    <VerticalFormStyleWrap>
      <sdCards title="Vertical Form">
        <a-form name="sDash_vertical-form" layout="vertical">
          <a-form-item label="Name">
            <a-input value="Duran Clayton" placeholder="input placeholder" />
          </a-form-item>
          <a-form-item label="Email Address">
            <a-input name="email" value="username@email.com" placeholder="input placeholder" />
          </a-form-item>
          <a-form-item label="Password">
            <a-input-password name="password" value="12345678" placeholder="with input password" />
          </a-form-item>
          <a-row>
            <a-col :xs="24">
              <div class="sDash_form-action">
                <sdButton class="btn-signin" html-type="submit" type="light">
                  Cancel
                </sdButton>
                <sdButton class="btn-signin" type="primary">
                  Save
                </sdButton>
              </div>
            </a-col>
          </a-row>
        </a-form>
      </sdCards>
    </VerticalFormStyleWrap>
  </BasicFormWrapper>
</template>

<script>
import { VerticalFormStyleWrap } from './Style';
import { BasicFormWrapper } from '../../styled';
export default {
  name: 'VerticalForm',
  components: {
    BasicFormWrapper,
    VerticalFormStyleWrap,
  },
};
</script>

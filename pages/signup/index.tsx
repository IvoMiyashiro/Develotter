import { NextPage } from 'next';
import Head from 'next/head';

import { Modal } from 'components/Modal';
import { SignupForm } from 'components/Forms/Signup';
import { FormWrapper } from 'components/FormWrapper';
import { PublicRoute } from 'components/PublicRoute';


const Signup: NextPage = () => {

  return (
    <>

      <Head>
        <title>Sign up for Develotter / Develotter</title>
      </Head>
      
      <PublicRoute>
        <Modal
          isOpen={true}
        >
          <FormWrapper>
            <SignupForm/>
          </FormWrapper>
        </Modal>
      </PublicRoute>
    </>
  );
};

export default Signup;

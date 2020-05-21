import React from 'react';
import ReactDOM from 'react-dom';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  createCustomer,
  createOffice,
  createPlan,
  createEmployee,
} from '~/store/modules/create/actions';

import {
  Overlay,
  Wrapper,
  Container,
  Header,
  Title,
  Close,
  ModalForm,
  Action,
} from './styles';

import {
  CreateCustomer,
  CreateOffice,
  CreatePlan,
  CreateEmployee,
} from '~/components/Form';

import {
  createCustomerSchema,
  createOfficeSchema,
  createPlanSchema,
  createEmployeeSchema,
} from '~/utils/schemas';

const schemas = [
  {
    page: '/dashboard',
  },
  {
    page: '/offices',
    schema: createOfficeSchema,
    form: CreateOffice,
    toDispatch({ name, city, state, image }) {
      return createOffice(name, city, state, image);
    },
  },
  {
    page: '/plans',
    schema: createPlanSchema,
    form: CreatePlan,
    toDispatch({ name, monthly_cost }) {
      return createPlan(name, monthly_cost);
    },
  },
  {
    page: '/customers',
    schema: createCustomerSchema,
    form: CreateCustomer,
    toDispatch({ name, is_company, document, office_id, plan_id }) {
      return createCustomer(name, is_company, document, office_id, plan_id);
    },
  },
  {
    page: '/employees',
    schema: createEmployeeSchema,
    form: CreateEmployee,
    toDispatch({ name, customer_id }) {
      return createEmployee(name, customer_id);
    },
  },
];

export default function Modal({ isShowing, hide }) {
  const location = useLocation();
  const { customerId } = useParams();

  const dispatch = useDispatch();
  const loading = useSelector(state => state.create.loading);

  const modal = schemas.find(({ page }) => location.pathname.includes(page));

  async function handleSubmit(data) {
    dispatch(modal.toDispatch(data));
  }

  async function handleEmployee({ name }) {
    dispatch(
      modal.toDispatch({
        name,
        customer_id: customerId,
      }),
    );
  }

  const Form = modal ? modal.form : null;

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <Overlay />
          <Wrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <Container>
              <Header>
                <Title>Adicionar novo</Title>
                <Close
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </Close>
              </Header>
              <ModalForm
                schema={modal.schema}
                onSubmit={
                  modal.page === '/employees' ? handleEmployee : handleSubmit
                }
              >
                <Form />
                <Action>
                  <button type="submit">
                    {loading ? 'Aguarde...' : 'Salvar'}
                  </button>
                </Action>
              </ModalForm>
            </Container>
          </Wrapper>
        </>,
        document.body,
      )
    : null;
}

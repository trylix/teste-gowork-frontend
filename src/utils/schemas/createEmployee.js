import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('É necessário cadastrar um nome'),
  customer_id: Yup.number().required('É necessário cadastrar um cliente'),
});

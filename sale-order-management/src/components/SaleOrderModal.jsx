import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SaleOrderModal = ({ isOpen, onClose, order }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: order || {
      customer_name: "",
      items: [],
      paid: false,
      invoice_no: "",
      invoice_date: new Date(),
    },
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {order ? "Edit Sale Order" : "New Sale Order"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Customer</FormLabel>
              <Controller
                name="customer_id"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Invoice No</FormLabel>
              <Controller
                name="invoice_no"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Invoice Date</FormLabel>
              <Controller
                name="invoice_date"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                  />
                )}
              />
            </FormControl>
            {/* Add more form fields as needed */}
            <Button type="submit">Save</Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;

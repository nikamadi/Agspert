import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getSaleOrders } from "../api";
import { EditIcon } from "@chakra-ui/icons";

const SaleOrderTable = ({ status, onEdit }) => {
  const { data: saleOrders, isLoading } = useQuery({
    queryKey: ["saleOrders", status],
    queryFn: () => getSaleOrders(status),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Invoice No</Th>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {saleOrders.map((order) => (
          <Tr key={order.id}>
            <Td>{order.invoice_no}</Td>
            <Td>{order.customer_id}</Td>
            <Td>{order.invoice_date}</Td>
            <Td>
              <IconButton icon={<EditIcon />} onClick={() => onEdit(order)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SaleOrderTable;

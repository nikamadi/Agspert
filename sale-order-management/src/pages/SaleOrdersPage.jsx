import {
  Box,
  Button,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import SaleOrderTable from "../components/SaleOrderTable";
import SaleOrderModal from "../components/SaleOrderModal";

const SaleOrdersPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleEdit = (order) => {
    setSelectedOrder(order);
    onOpen();
  };

  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Button
              onClick={() => {
                setSelectedOrder(null);
                onOpen();
              }}
            >
              + Sale Order
            </Button>
            <SaleOrderTable status="active" onEdit={handleEdit} />
          </TabPanel>
          <TabPanel>
            <SaleOrderTable status="completed" onEdit={handleEdit} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <SaleOrderModal isOpen={isOpen} onClose={onClose} order={selectedOrder} />
    </Box>
  );
};

export default SaleOrdersPage;

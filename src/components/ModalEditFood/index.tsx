import { Component, createRef, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import Modal from '../Modal';
import Input from '../Input';
import { FoodForm } from '../../types';

import { Form } from './styles';

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: () => void;
  handleUpdateFood: ({ food }: FoodForm) => void;
}

const ModalEditFood: React.FC<ModalEditFoodProps> = ({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood
}: ModalEditFoodProps) => {
  const formRef = useRef(null);

  const handleSubmit = ({ food }: FoodForm) => {
    handleUpdateFood({ food });
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;

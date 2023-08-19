'use client';

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Selection} from "@nextui-org/react";
import { useMemo } from "react";

type option = {
  key: string;
  value: string;
}

const Select = ({
  label,
  options,
  selectedValue,
  onChange
}: {
  label: string,
  options: Array<option>,
  selectedValue?: string | undefined,
  onChange: (keys: Selection) => void
}) => {

  const selectedKey = useMemo(
    () => options.find(((item) => item.key === selectedValue))?.key,
    [selectedValue, options]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValue || label}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection actions"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKey}
        onSelectionChange={onChange}
      >
        {options.map((item) => (
          <DropdownItem key={item.key}>{item.value}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default Select;

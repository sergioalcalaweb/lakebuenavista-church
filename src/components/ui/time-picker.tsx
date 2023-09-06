import { parseTimeString } from "@/utils/time";
import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";

interface TimePickerProps {
  disabled?: boolean;
  onChange: (value: string) => void,
  value: string | undefined;
}

const TimePicker = ({value, onChange, disabled}: TimePickerProps) => {

  const [hour, setHour] = useState(parseTimeString(value)?.hour || '1');
  const [minute, setMinute] = useState(parseTimeString(value)?.minute ||'00');
  const [period, setPeriod] = useState(parseTimeString(value)?.period ||'AM');

  const handleHourChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newHour = event.target.value;
    setHour(newHour);
    onChange(`${newHour}:${minute} ${period}`);
  };

  const handleMinuteChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newMinute = event.target.value;
    setMinute(newMinute);
    onChange(`${hour}:${newMinute} ${period}`);
  };

  const handlePeriodChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newPeriod = event.target.value;
    setPeriod(newPeriod);
    onChange(`${hour}:${minute} ${newPeriod}`);
  };

  return (
    <div className="block w-full">
      <div className="flex">
        <Select onChange={handleHourChange} disabled={disabled} name="hours" variant="underlined">
          {Array.from({ length: 12 }, (_, index) => index + 1).map((h) => (
            <SelectItem key={h} value={h}>{h}</SelectItem>
          ))}
        </Select>
        <span className="text-xl mr-3">:</span>
        <Select onChange={handleMinuteChange} disabled={disabled} name="minutes" variant="underlined">
          {Array.from({ length: 4 }, (_, index) => index * 15).map((m) => (
            <SelectItem key={m} value={m === 0 ? '00' : m}>{m === 0 ? '00' : m}</SelectItem>
          ))}
        </Select>
        <Select onChange={handlePeriodChange} disabled={disabled} name="ampm" variant="underlined">
          <SelectItem key="am" value="am">AM</SelectItem>
          <SelectItem key="pm" value="pm">PM</SelectItem>
        </Select>
      </div>
</div>
  );
}
 
export default TimePicker;
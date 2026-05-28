import { addMinutes, format, isBefore } from 'date-fns';

export interface TimeSlot {
  start: string;
  end: string;
  label: string;
}

export function generateSlots(
  startTime: string,
  endTime: string,
  durationMinutes: number,
  bookedStarts: string[]
): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const [sh, sm] = startTime.split(':').map(Number);
  const [eh, em] = endTime.split(':').map(Number);
  let current = new Date(2000, 0, 1, sh, sm);
  const end = new Date(2000, 0, 1, eh, em);

  while (true) {
    const next = addMinutes(current, durationMinutes);
    if (isBefore(end, next) || +end === +current) break;
    const startStr = format(current, 'HH:mm');
    if (!bookedStarts.includes(startStr)) {
      slots.push({ start: startStr, end: format(next, 'HH:mm'), label: format(current, 'h:mm a') });
    }
    current = next;
  }
  return slots;
}

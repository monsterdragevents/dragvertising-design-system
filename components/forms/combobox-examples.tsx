/**
 * Combobox Examples
 * 
 * Reference examples for the Combobox component.
 * Supports Tailwind CSS combobox patterns.
 */

import { Combobox, ComboboxOption } from '@/ui/primitives/combobox';
import { useState } from 'react';

export function ComboboxExamples() {
  const [selectedValue, setSelectedValue] = useState<string>();

  const simpleOptions: ComboboxOption[] = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  const statusOptions: ComboboxOption[] = [
    { value: "1", label: "Active", status: { label: "Active", variant: "success" } },
    { value: "2", label: "Pending", status: { label: "Pending", variant: "warning" } },
    { value: "3", label: "Inactive", status: { label: "Inactive", variant: "secondary" } },
  ];

  const imageOptions: ComboboxOption[] = [
    { value: "1", label: "John Doe", image: { src: "/avatar.jpg", alt: "John", fallback: "JD" } },
    { value: "2", label: "Jane Smith", image: { src: "/avatar.jpg", alt: "Jane", fallback: "JS" } },
  ];

  const secondaryOptions: ComboboxOption[] = [
    { value: "1", label: "Primary Action", secondaryText: "Main action for this item" },
    { value: "2", label: "Secondary Action", secondaryText: "Alternative action option" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Combobox</h3>
        <Combobox
          variant="default"
          options={simpleOptions}
          value={selectedValue}
          onValueChange={setSelectedValue}
          placeholder="Select an option..."
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Status Indicators</h3>
        <Combobox
          variant="with-status"
          options={statusOptions}
          value={selectedValue}
          onValueChange={setSelectedValue}
          placeholder="Select status..."
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Images</h3>
        <Combobox
          variant="with-image"
          options={imageOptions}
          value={selectedValue}
          onValueChange={setSelectedValue}
          placeholder="Select a person..."
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Secondary Text</h3>
        <Combobox
          variant="with-secondary"
          options={secondaryOptions}
          value={selectedValue}
          onValueChange={setSelectedValue}
          placeholder="Select an action..."
        />
      </div>
    </div>
  );
}

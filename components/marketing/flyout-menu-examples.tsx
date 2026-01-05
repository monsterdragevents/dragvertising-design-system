/**
 * Flyout Menu Examples
 * 
 * Reference examples for the FlyoutMenu component.
 * Supports Tailwind CSS flyout menu patterns.
 */

import { FlyoutMenu, FlyoutMenuSection } from '@/ui/primitives/flyout-menu';
import { Button } from '@/ui/primitives/button';
import { useState } from 'react';
import { Settings, User, LogOut } from 'lucide-react';

export function FlyoutMenuExamples() {
  const [isOpen, setIsOpen] = useState(false);

  const sections: FlyoutMenuSection[] = [
    {
      id: "account",
      title: "Account",
      items: [
        {
          id: "1",
          label: "Profile",
          href: "/profile",
          icon: <User className="h-4 w-4" />,
          description: "View and edit your profile",
        },
        {
          id: "2",
          label: "Settings",
          href: "/settings",
          icon: <Settings className="h-4 w-4" />,
          description: "Manage your account settings",
        },
        {
          id: "3",
          label: "Sign Out",
          onClick: () => console.log("Sign out"),
          icon: <LogOut className="h-4 w-4" />,
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple Flyout Menu</h3>
        <FlyoutMenu
          variant="simple"
          trigger={<Button>Open Menu</Button>}
          sections={sections}
          open={isOpen}
          onOpenChange={setIsOpen}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Descriptions</h3>
        <FlyoutMenu
          variant="with-descriptions"
          trigger={<Button>Open Menu</Button>}
          sections={sections}
          open={isOpen}
          onOpenChange={setIsOpen}
        />
      </div>
    </div>
  );
}

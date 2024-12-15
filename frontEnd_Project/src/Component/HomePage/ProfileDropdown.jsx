import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
  } from "@nextui-org/dropdown";
  import { UserIcon } from "@heroicons/react/24/outline";
  
  function ProfileDropdown() {
    return (
      <div>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button className="text-desc" variant="none">
                <UserIcon className="text-desc w-4 h-4" />
                Account
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="text-desc">
              <DropdownItem>My Profile</DropdownItem>
              <DropdownItem>My History</DropdownItem>
              <DropdownItem>Sign Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </div>
    );
  }

export default ProfileDropdown;

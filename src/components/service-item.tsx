import { Card, CardBody, Typography } from "@material-tailwind/react";

interface ServiceItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
  active?: boolean;
}

export function ServiceItem({ icon: Icon, children, active = false }: ServiceItemProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className={`border-l-2 ${active ? 'border-green-500' : 'border-green-300'} pl-4 transition-all duration-300`}
    >
      <CardBody className="p-0">
        <div className="flex items-center gap-4">
          <span className={`rounded-full border ${active ? 'border-green-500 bg-green-50' : 'border-green-300 bg-white'} p-1.5 text-green-600 transition-all duration-300`}>
            <Icon className={`h-5 w-5 ${active ? 'text-green-600' : 'text-green-400'}`} />
          </span>
          <Typography className={`font-medium ${active ? '!text-gray-800' : '!text-gray-600'} transition-all duration-300`}>
            {children}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

export default ServiceItem;

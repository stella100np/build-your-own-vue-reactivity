import { ExclamationTriangleIcon, InformationCircleIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
export const Alert = ({ type, children }) => {
  const iconMap = {
    danger: <ExclamationCircleIcon className="w-6 h-6 mr-4" />,
    info: <InformationCircleIcon className="w-6 h-6 mr-4" />,
    success: <CheckCircleIcon className="w-6 h-6 mr-4" />,
    warning: <ExclamationTriangleIcon className="w-6 h-6 mr-4" />,
  };

  return (
    <div className={`bg-${type}-50 border-l-4 border-${type}-400 p-4 mb-4`}>
      <div className="flex">
        {iconMap[type]}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export const Tip = ({ children }) => {
  return (
    <div className="not-mx bg-indigo-100 rounded-md p-4 mb-4 ">
      <div className="flex">
        <InformationCircleIcon className="flex-none w-6 h-6 mr-4 text-indigo-500" />
        <div className='text-base text-indigo-600 font-mono font-medium'>
          {children}
        </div>
      </div>
    </div>
  );
};

export const Note = ({ children }) => {
  return (
    <div className="not-mx bg-slate-100  rounded-md p-4 mb-4 ">
      <div className="flex">
        <ExclamationCircleIcon className="w-6 h-6 mr-4 text-slate-500" />
        <div className='text-base text-slate-600 font-mono font-medium'>
          {children}
        </div>
      </div>
    </div>
  );
};



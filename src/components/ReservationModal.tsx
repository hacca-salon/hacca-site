import React from 'react';
import { useTranslation } from 'react-i18next';

export type ReservationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 背景を少し透過 */}
      <div
        className="absolute inset-0 bg-black opacity-40"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-4 sm:mx-6 md:mx-auto p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4">
          {t('reservation.title')}
        </h3>

        <ul className="space-y-3">
          <li>
            <a
              href="https://line.me/R/ti/p/%40ktc3244q"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center px-4 py-2 sm:px-6 sm:py-3 border rounded hover:bg-gray-100"
            >
              <img
                src="/icons8-line-144.png"
                alt="LINE"
                className="w-6 h-6 mr-2"
              />
              {t('reservation.options.line')}
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/haccaforhair/?locale=ja_JP"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center px-4 py-2 sm:px-6 sm:py-3 border rounded hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 mr-2 text-black"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              {t('reservation.options.facebook')}
            </a>
          </li>
          <li>
            <a
              href="https://vn.salondenet-beauty.com/shopdetail/3"
              target="_blank"
              className="w-full flex items-center px-4 py-2 sm:px-6 sm:py-3 border rounded hover:bg-gray-100"
            >
              <img
                src="/logo_mark.png"
                alt="haccaマーク"
                className="w-6 h-6 mr-2"
              />
              {t('reservation.options.hacca')}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

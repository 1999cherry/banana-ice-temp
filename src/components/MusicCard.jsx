'use client'
import  { useState, useEffect } from 'react';

const price = [
    { id: 1, name: '[필수] 연출', sub: '- 300,000', selected: true, price: '300000' },
    { id: 2, name: '콘티 제작', sub: '- 200,000', selected: false, price: '200000' },
    { id: 3, name: '스토리보드 제작', sub: '- 400,000', selected: false, price: '400000' },
    { id: 4, name: '[필수] 촬영', sub: '- 800,000', selected: true, price: '800000' },
    { id: 5, name: '시네마 카메라, 렌즈 사용(RED, ARRI)(1Day)', sub: '- 700,000', selected: false, price: '700000', className: 'ml-4' },
    { id: 6, name: '[필수] 편집', sub: '- 400,000', selected: true, price: '400000' },
    { id: 7, name: '[필수] 색보정', sub: '- 200,000', selected: true, price: '200000', className: 'ml-4' },
    { id: 8, name: 'VFX', selected: false, price: '0', className: 'mt-4'},
    { id: 9, name: '2D', sub: '- 300,000', selected: false, price: '300000', className: 'ml-4' },
    { id: 10, name: '3D', sub: '- 400,000', selected: false, price: '400000', className: 'ml-4' },
    { id: 11, name: 'AI', sub: '- 600,000', selected: false, price: '600000', className: 'ml-4' },
    { id: 12, name: '헤어, 메이크업 출장(1Day)-남', sub: '- 200,000', selected: false, price: '200000' },
    { id: 13, name: '헤어, 메이크업 출장(1Day)-여', sub: '- 300,000', selected: false, price: '300000' },
    { id: 14, name: '스타일리스트 출장(1Day) (2착장 의류 대여 포함)', sub: '- 500,000', selected: false, price: '500000' },
];

const defaultTime = 120;

export default function MusicCard() {
    const [selectedPrice, setSelectedPrice] = useState(price);
    const [sec, setSec] = useState(defaultTime);
    const [totalSum, setTotalSum] = useState(0);

    useEffect(() => {
        const timeDifference = sec - defaultTime;
        const increasePercentage = timeDifference > 0 ? (timeDifference * 0.005) : 0;
        const calculatedSum = selectedPrice
            .filter(person => person.selected)
            .reduce((sum, person) => sum + parseInt(person.price, 10), 0);

        let updatedTotalSum = calculatedSum * (1 + increasePercentage);

        setTotalSum(updatedTotalSum);
    }, [sec, selectedPrice]); // 초가 변경될 때마다 계산


    const handleCheckboxChange = (id) => {
        setSelectedPrice(prevPeople =>
            prevPeople.map(person =>
                person.id === id ? { ...person, selected: !person.selected } : person
            )
        );
    };

    const handleSecChange = (event) => {
        const inputSec = parseInt(event.target.value, 10) || defaultTime;
        setSec(inputSec);
    };

    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
                <fieldset>
                    <legend className="text-base font-semibold text-gray-900">BANANA ICE MUSIC VIDEO</legend>
                    <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
                        {selectedPrice.map((price, priceIdx) => (
                            <div key={priceIdx} className={`relative flex gap-3 py-4 ${price.className || ''}`}>
                                <div className="min-w-0 flex-1 text-sm/6">
                                    <label htmlFor={`person-${price.id}`} className="select-none font-medium text-gray-900">
                                        <span className="font-bold">{price.name}</span> {price.sub}
                                    </label>
                                </div>
                                {price.name !== 'VFX' && (
                                    <div className="flex h-6 shrink-0 items-center">
                                        <div className="group grid size-4 grid-cols-1">
                                            <input
                                                checked={price.selected}
                                                onChange={() => handleCheckboxChange(price.id)}
                                                id={`person-${price.id}`}
                                                name={`person-${price.id}`}
                                                type="checkbox"
                                                className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-[#FEB81D] checked:bg-[#FEB81D] indeterminate:border-[#FEB81D] indeterminate:bg-[#FEB81D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FEB81D] disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                            />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                )}</div>
                        ))}
                    </div>
                </fieldset>
                <span className='mt-4 block text-sm'>로케이션 대여 비용은 본인 부담입니다.</span>
            </div>
            <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white px-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#FEB81D]">
                                <input
                                    id="sec"
                                    name="sec"
                                    type="number"
                                    value={sec}
                                    onChange={handleSecChange}
                                    placeholder="120"
                                    className="block min-w-0 grow py-1.5 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                />
                                <div id="price-currency" className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                                    초
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="font-bold">{totalSum.toLocaleString()} 원</span>
                </div>
            </div>
        </div>
    );
}

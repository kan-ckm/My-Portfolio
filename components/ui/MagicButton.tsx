import React from 'react'

type MagicButtonProps = {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherclasses?: string;
};

const MagicButton = ({ title, icon, position, handleClick, otherclasses }: MagicButtonProps) => {
    // dùng props ở đây

    return (
        <div>
            <button onClick={handleClick} className="relative inline-flex h-12 w-full  overflow-hidden rounded-lg p-[1px] focus:outline-0 md:w-60 md:mt-5 ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 gap-2 text-sm font-medium text-white backdrop-blur-3xl ${otherclasses}`}>
                    {
                        position === 'left' && icon
                    }
                    {title}
                    {
                        position === 'right' && icon
                    }
                </span>
            </button>
        </div>
    )
}

export default MagicButton

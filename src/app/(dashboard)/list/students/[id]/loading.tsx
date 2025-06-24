import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TeacherSkeleton = () => {
    return (
        <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
            <div className="w-full xl:w-2/3">
                {/* Top section */}
                <div className="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center">
                    {/* Left Card */}
                    <div className="bg-gray-100 py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                            <Skeleton circle height={144} width={144} />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <Skeleton height={24} width={`80%`} />
                            <Skeleton count={2} />
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                {Array(4)
                                    .fill(0)
                                    .map((_, idx) => (
                                        <Skeleton key={idx} height={20} />
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {Array(4)
                            .fill(0)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-100 p-4 rounded-md w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
                                >
                                    <Skeleton height={24} width={24} />
                                    <Skeleton height={20} width={`60%`} />
                                    <Skeleton height={14} width={`40%`} />
                                </div>
                            ))}
                    </div>
                </div>

                {/* Bottom Schedule */}
                <div className="mt-4 bg-gray-100 rounded-md p-4 h-[800px]">
                    <Skeleton height={24} width={`30%`} />
                    <Skeleton height={750} />
                </div>
            </div>

            {/* Sidebar */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <div className="bg-gray-100 p-4 rounded-md">
                    <Skeleton height={24} width={`40%`} />
                    <div className="mt-4 flex gap-4 flex-wrap">
                        {Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <Skeleton
                                    key={i}
                                    height={30}
                                    width={`45%`}
                                    borderRadius={8}
                                />
                            ))}
                    </div>
                </div>
                <Skeleton height={200} />
                <Skeleton height={300} />
            </div>
        </div>
    );
};

export default TeacherSkeleton;

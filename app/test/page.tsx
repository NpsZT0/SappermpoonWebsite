import dynamic from "next/dynamic";

const Trough3d = dynamic(() => import("./components/Trough"), { 
    ssr: false,
    loading: () => <p>Loading...</p>
});

function Trough3dPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Trough3d />
        </div>
    );
}

export default Trough3dPage;
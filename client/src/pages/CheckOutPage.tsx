import { Breadcrumb } from "../components/Breadcrumb";
import { BillingForm } from "../components/Order/BillingForm";
import { OrderSummary } from "../components/Order/OrderSummary";

export function CheckOutPage() {
    const breadcrumbItems = [
        {
            label: "Account",
            link: "#",
        },
        {
            label: "My Account",
            link: "#",
        },
        {
            label: "Product",
            link: "#",
        },
        {
            label: "View Cart",
            link: "#",
        },
        {
            label: "CheckOut",
        },
    ];
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto">
                <Breadcrumb items={breadcrumbItems} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h1 className="text-3xl font-bold mb-8">Billing Details</h1>
                        <BillingForm />
                    </div>
                    <div className="lg:pl-12">
                        <OrderSummary />
                        <div className="mt-6 flex space-x-4">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className="flex-1 p-3 bg-gray-50 rounded"
                            />
                            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
                                Apply Coupon
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

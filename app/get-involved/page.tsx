export default function GetInvolved() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-bold mb-8">Get Involved &amp; Make an Impact</h1>
      <p className="text-2xl mb-12">Your support changes lives in KwaSmolo. Every contribution counts.</p>
      
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-6">Donate Securely</h2>
        {/* Integrate PayFast later or placeholder */}
        <div className="bg-gray-100 h-64 flex items-center justify-center mb-8 rounded-xl">
          PayFast / Bank Details Form Here (we'll add component next)
        </div>
        <p className="text-lg">Banking details or other options available on request.</p>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6">Other Ways to Help</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-8 rounded-xl">Volunteer • Skills Sharing</div>
          <div className="border p-8 rounded-xl">Corporate Partnership • CSR</div>
        </div>
      </div>
    </div>
  );
}

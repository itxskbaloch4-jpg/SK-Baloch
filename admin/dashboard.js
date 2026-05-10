<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin CRM | SK Baloch</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        .glass { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); }
        #adminContent { display: none; } /* Shuru mein hidden rahega */
    </style>
</head>
<body class="bg-[#050505] text-white font-sans">

    <!-- Login Section -->
    <div id="loginSection" class="fixed inset-0 z-[100] flex items-center justify-center bg-black">
        <div class="glass p-8 rounded-3xl w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-emerald-400 text-center">Admin Access</h2>
            <input type="password" id="adminPass" placeholder="Enter Admin Password" class="w-full p-4 rounded-xl bg-white/5 border border-white/10 mb-4 outline-none focus:border-emerald-500">
            <button onclick="checkLogin()" class="w-full py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all">Login to Dashboard</button>
            <p id="loginError" class="text-red-500 mt-4 text-center hidden">Access Denied!</p>
        </div>
    </div>

    <!-- Main Dashboard Content -->
    <div id="adminContent">
        <nav class="border-b border-white/10 p-4 glass sticky top-0 z-50">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="text-xl font-bold text-emerald-400 text-gradient">SK Baloch CRM</h1>
                <button onclick="logout()" class="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition">Logout</button>
            </div>
        </nav>

        <main class="container mx-auto p-6">
            <!-- Stats -->
            <div class="grid md:grid-cols-3 gap-6 mb-10">
                <div class="p-6 glass rounded-2xl text-center">
                    <p class="text-gray-400 text-sm">Total Leads</p>
                    <h3 id="totalLeads" class="text-3xl font-bold">0</h3>
                </div>
                <div class="p-6 glass rounded-2xl text-center">
                    <p class="text-gray-400 text-sm">High Value</p>
                    <h3 id="highScoreLeads" class="text-3xl font-bold text-emerald-400">0</h3>
                </div>
                <div class="p-6 glass rounded-2xl text-center">
                    <p class="text-gray-400 text-sm">Active Enquiries</p>
                    <h3 id="activeLeads" class="text-3xl font-bold text-blue-400">0</h3>
                </div>
            </div>

            <!-- Table -->
            <div class="glass rounded-3xl overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead class="bg-white/5 text-gray-400 text-sm uppercase">
                            <tr>
                                <th class="p-4">Client</th>
                                <th class="p-4">AI Score</th>
                                <th class="p-4">Status</th>
                                <th class="p-4">Date</th>
                                <th class="p-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody id="leadsTableBody" class="divide-y divide-white/5"></tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>

    <script src="js/dashboard.js"></script>
</body>
</html>

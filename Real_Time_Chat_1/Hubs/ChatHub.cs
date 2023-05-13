using System;
using System.Web;
using Microsoft.AspNetCore.SignalR;

namespace Real_Time_Chat1.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string name, string message)
        {
            // Call the addNewMessageToPage method to update clients.
            await Clients.All.SendAsync("ReceiMessage",name, message);
        }
    }
}

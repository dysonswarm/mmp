using System;

namespace DysonSwarmMMP.Code
{
    public class Event
    {
        public Guid Key { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTimeOffset StartDate { get; set; }
    }
}
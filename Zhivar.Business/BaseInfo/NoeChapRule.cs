﻿using System;
using System.Collections.Generic;
using OMF.Business;
using OMF.Common;
using OMF.Common.Configuration;
using OMF.Common.ExceptionManagement.Exceptions;
using OMF.Common.Extensions;
using OMF.Common.Security;
using OMF.EntityFramework.Ef6;
using OMF.EntityFramework.Query;
using OMF.EntityFramework.UnitOfWork;
using OMF.Security.Model;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BCValidation = OMF.Common.Validation;
using Zhivar.DomainClasses.BaseInfo;

namespace Zhivar.Business.BaseInfo
{
    public partial class NoeChapRule : BusinessRuleBase<NoeChap>
    {
        public NoeChapRule()
            : base()
        {

        }

        public NoeChapRule(IUnitOfWorkAsync uow)
            : base(uow)
        {

        }

        public NoeChapRule(bool useForAnonymousUser)
            : base()
        {
            UseForAnonymousUser = useForAnonymousUser;
        }

        public List<NoeChap> GetAllByOrganId(int organId)
        {
            var NoeChaps = this.Queryable().Where(x => x.OrganId == organId).ToList();

            return NoeChaps;
        }
        public async Task<List<NoeChap>> GetAllByOrganIdAsync(int organId)
        {
            var NoeChaps = await this.Queryable().Where(x => x.OrganId == organId).ToListAsync2();

            return NoeChaps;

        }

    }
}